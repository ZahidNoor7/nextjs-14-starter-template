const DynamicRoute = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-screen-lg mx-auto mt-10 p-4">
      <p className="text-lg">Params: {params?.id}</p>
    </div>
  );
};

export default DynamicRoute;
