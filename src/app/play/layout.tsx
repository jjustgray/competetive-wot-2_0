import PlayTopbar from "@/widgets/shared-components/PlayTopbar";

//import { TeamProvider } from "@/entities/team/model/TeamContext";
export default function PlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //<TeamProvider>
      <div className="flex flex-col min-h-screen items-center">
        <PlayTopbar />
        <div className="flex-1">
          {children}
        </div>
      </div>
    //</TeamProvider>
  )
}