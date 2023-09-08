async function getUser(id) {
    const response = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await response.json();
    return data.data
}
const PageUser = async({params}) => {
   const user = await getUser(params.id)
  return (
    <div className="bg-slate-400 rounded-md p-4" >
        <h1 className="text-4xl font-bold text-center">User</h1>
        <img src={user.avatar} alt="avatar" className="m-auto my-4 rounded-2xl" />
        <h2 className="text-3xl font-bold text-zinc-800">{user.first_name} {user.last_name} </h2>
        <p className="font-light">E-mail: {user.email}</p>
    </div>
  )
}

export default PageUser