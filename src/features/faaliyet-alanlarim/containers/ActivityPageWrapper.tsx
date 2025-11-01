import PageHeader from "@/components/page-header/PageHeader";
import ActivityList from "@/features/faaliyet-alanlarim/components/ActivityList";

export default function ActivityPageWrapper() {
  return (
    <>
      <PageHeader
        title="Faaliyet Alanlarım"
        description="Gayrimenkul Hukuku alanında her şey."
      />
      <ActivityList />
    </>
  );
}
