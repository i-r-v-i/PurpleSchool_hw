const getQuery = ({search, take}) => {
  console.log(`search=${search}&take=${take}`);
  return `search=${search}&take=${take}`
}

getQuery({search: 'Vasya', take: 13})
