import CategoryLayout from "../../components/categories/CategoryLayout";

export default async function BeginnerTrading({
  params,
}: {
  params: { lang: string };
}) {
  return (
    <main>
      <CategoryLayout
        category="beginner-trading"
        title="Beginner Trading"
        lang={params.lang}
      />
    </main>
  );
}
