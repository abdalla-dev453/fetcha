import { useAuth } from "../features/auth/hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}

export default Profile;