import { createClient } from "./lib/server";

export default async function Page() {
  const supabaseClient = await createClient();
  const { data: blogs, error } = await supabaseClient
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mx-auto w-full max-w-4xl rounded-xl bg-gray-50 p-6 md:p-12">
        <h1>Main page</h1>
        <p className="mt-4 text-gray-500">
          This is the main page of the blog. Below is the data fetched from the
          "blogs" table in Supabase:
        </p>
        {blogs?.map((item) => (
          <div key={item.id} className="mt-4 rounded-lg bg-white p-4 shadow">
            <h2 className="text-xl font-bold">
              {new Date(item.created_at).toDateString()}
            </h2>
            <p className="mt-2 text-gray-600">{item.created_by}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
