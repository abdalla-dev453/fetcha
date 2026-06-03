const Spinner = () => {
  return (
    <div className="flex justify-center py-8">
      <div
        className="
          h-10
          w-10
          border-4
          border-orange-500
          border-t-transparent
          rounded-full
          animate-spin
        "
      />
    </div>
  );
}

export default Spinner;