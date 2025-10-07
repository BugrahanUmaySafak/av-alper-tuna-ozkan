"use client";

import PageHeader from "@/components/PageHeader";
import ActivityList from "@/features/faaliyet-alanlarım/components/ActivityList";

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
