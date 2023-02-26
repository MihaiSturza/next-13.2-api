import React from 'react'

async function fetchUsers() {
    const res = await fetch('http://localhost:3000/api/users', {next: {revalidate: 5}})
    const body = await res.text()
    return JSON.parse(body)
}

export default async function Users() {
    const user = await fetchUsers()
  return (
    <>
    <div>User: {user.user}</div>
    <div>Style: {user.style}</div>
    </>
  )
}
