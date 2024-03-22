import Link from "next/link"

const Nav = () => {
  return (
    <header className="bg-gray-600 text-gray-100">
        <nav className="flex justify-between items-center w-full px-10 py-4">
            <div>CodeHub</div>
            <div className="flex gap-10">
                <Link href="/"><a aria-description="home">Home</a></Link>
                <Link href="/createUser"><a aria-description="createUser">Create User</a></Link>
                <Link href="/clientMember"><a aria-description="clientMember">Client Member</a></Link>
                <Link href="/public"><a aria-description="public">Public</a></Link>
            </div>
        </nav>
    </header>
  )
}

export default Nav