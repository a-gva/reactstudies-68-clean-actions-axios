import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className="card shadow-md compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div >
                    <div className="avatar">
                        <div className="rounded-full shadow w-20 h-20">
                            <img src={avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="card-title">
                {login}
            </h2>
            <Link className="text-base-content text-opacity-40" to={`/user/${login}`} >
                Visite o perfil
            </Link>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem