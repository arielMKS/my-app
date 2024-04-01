import Frame from "@/components/frame/frame";

const Doc = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  console.log("Params", params.slug);
  return <Frame>Doc</Frame>;
};

export default Doc;
