import PlayTopbar from "@/widgets/shared-components/PlayTopbar";

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="flex flex-col flex-1 h-full w-full items-center">
        <PlayTopbar />
        <div className="flex-1 w-full pt-2">
          {children}
        </div>
      </div>
  )
}