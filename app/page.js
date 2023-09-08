import Users from '../components/Users'
const loadApi = async () => {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data.data;
};
async function Homepage() {
  const users = await loadApi();
  return (
    
      <Users users={users}/>
    
  );
}

export default Homepage;
