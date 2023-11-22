import { V1Pod } from '@kubernetes/client-node';
import { denyOnErrors } from '../../util/helpers'
import { validateNamespace } from '../../lib/metadata/validateNamespace';
import { validateContainerCapabilities } from '../../lib/containers/validateCapabilities';
import { validateContainerResources } from '../../lib/containers/validateResources';

const pod = request.object as V1Pod;

denyOnErrors(
    validateNamespace(request),
    validateContainerCapabilities(pod?.spec),
    validateContainerResources(pod?.spec)
);
