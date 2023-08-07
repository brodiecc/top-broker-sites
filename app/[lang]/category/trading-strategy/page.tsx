import CategoryLayout from "../../components/categories/CategoryLayout";

export default function TradingStrategy({
  params,
}: {
  params: { lang: string };
}) {
  return (
    <main>
      <CategoryLayout
        category="trading-strategy"
        title="Trading Strategy"
        lang={params.lang}
      />
    </main>
  );
}
