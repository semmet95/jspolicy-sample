import { V1Container, V1PodSpec } from "@kubernetes/client-node";

export function validateContainerResources(podSpec?: V1PodSpec): string[] {
    const errors: string[] = [];

    podSpec?.containers?.forEach((container: V1Container, index: number) => {
        if (!(container.resources?.limits) || !('memory' in container.resources.limits)) {
            errors.push("Memory limit not defined for spec.containers[" + index + "].")
        }
    })

    podSpec?.initContainers?.forEach((initContainer: V1Container, index: number) => {
        if (!(initContainer.resources?.limits) || !('memory' in initContainer.resources.limits)) {
            errors.push("Memory limit not defined for spec.initContainers[" + index + "].")
        }
    })

    return errors;
}