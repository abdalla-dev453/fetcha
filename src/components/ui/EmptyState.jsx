const EmptyState = ({ message }) => {
  return (
    <div className="text-center py-16">
      <h2 className="text-xl font-semibold">
        {message}
      </h2>
    </div>
  );
}

export default EmptyState;