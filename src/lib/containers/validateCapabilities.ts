import { V1Container, V1PodSpec } from "@kubernetes/client-node";

export function validateContainerCapabilities(podSpec?: V1PodSpec): string[] {
    const errors: string[] = [];
    
    podSpec?.containers?.forEach((container: V1Container, index: number) => {
        if (container.securityContext?.capabilities?.add?.length ||
            container.securityContext?.runAsUser == 0 ||
            container.securityContext?.privileged) {
            errors.push("Field spec.containers[" + index + "].securityContext is not allowed.")
        } 
    })

    podSpec?.initContainers?.forEach((initContainer: V1Container, index: number) => {
        if (initContainer.securityContext?.capabilities?.add?.length ||
            initContainer.securityContext?.runAsUser == 0 ||
            initContainer.securityContext?.privileged) {
            errors.push("Field spec.initContainers[" + index + "].securityContext is not allowed.")
        }
    })
    
    return errors;
}
