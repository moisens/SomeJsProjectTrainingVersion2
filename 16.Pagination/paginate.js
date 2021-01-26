const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPage = Math.ceil(followers.length / itemsPerPage);
  const numberOfFollowersPerPage =  Array.from({length:numberOfPage}, (_,index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return numberOfFollowersPerPage;
}

export default paginate
