export const paginateData = (data: Array<any>, pagination: { page: number; limit: number }) => {
  const start = pagination.page * pagination.limit;
  const end = start + pagination.limit;
  return data.slice(start, end);
};
