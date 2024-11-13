// src/config/tablesConfig.js
import { toolRestrictionsService } from '../services/toolRestrictionsService';
import { processExclusionsService } from '../services/processExclusionsService';

// src/config/tablesConfig.js
export const tablesConfig = [
  {
    name: 'Tool Restrictions',
    path: '/tool-restrictions',
    service: toolRestrictionsService,
    fields: [
      { name: 'toolId', label: 'Tool ID', type: 'text', required: true, readOnly: true },
      { name: 'toolClass', label: 'Tool Class', type: 'text', required: true },
      { name: 'restriction', label: 'Restriction', type: 'text', required: true },
      { name: 'loadPorts', label: 'Load Ports', type: 'number' },
      { name: 'podPorts', label: 'Pod Ports', type: 'number' },
      { name: 'reticlePorts', label: 'Reticle Ports', type: 'number' },
      { name: 'numParallelBatches', label: 'Num Parallel Batches', type: 'number' },
    ],
  },
  {
    name: 'Process Exclusions',
    path: '/process-exclusions',
    service: processExclusionsService,
    fields: [
      { name: 'operationId', label: 'Operation ID', type: 'text', required: true, readOnly: true },
      { name: 'toolId', label: 'Tool ID', type: 'text', required: true, readOnly: true },
      { name: 'productId', label: 'Product ID', type: 'text', readOnly: true },
      { name: 'comments', label: 'Comments', type: 'text' },
    ],
  },
];

