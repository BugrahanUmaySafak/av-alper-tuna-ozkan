import PageHeader from "@/components/page-header/PageHeader";
import ActivityList from "@/features/faaliyet-alanlarım/components/ActivityList";

// server component: “use client” yok
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
