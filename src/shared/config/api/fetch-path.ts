enum enumFetchPath {
  POINT = 'point',
  REPORT = 'report'
}

export const fetchPath: Record<enumFetchPath, string> = {
  [enumFetchPath.POINT]: 'points',
  [enumFetchPath.REPORT]: 'point/id/reports'
}
