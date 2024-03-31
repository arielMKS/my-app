const ReviewDetail = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      Review {params.productId} {params.reviewId}
    </div>
  );
};

export default ReviewDetail;
