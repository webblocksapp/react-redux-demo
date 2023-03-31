export const paginateData = (data: Array<any>, pagination: { page: number; limit: number }) => {
  const limit = Number(pagination.limit);
  const start = Number(pagination.page) * limit;
  const end = start + limit;
  return data.slice(start, end);
};
