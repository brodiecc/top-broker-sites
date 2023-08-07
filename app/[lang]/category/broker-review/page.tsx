import CategoryLayout from "../../components/categories/CategoryLayout";

export default function BrokerReview({ params }: { params: { lang: string } }) {
  return (
    <main>
      <CategoryLayout
        category="broker-review"
        title="Broker Reviews"
        lang={params.lang}
      />
    </main>
  );
}
