const Doc = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  console.log("Params", params.slug);
  return <div>Doc</div>;
};

export default Doc;
