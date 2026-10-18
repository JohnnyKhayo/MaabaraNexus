import { Link } from "react-router-dom";

const statusStyles = {
  received: "bg-red-100 text-red-800",
  processing: "bg-amber-100 text-amber-800",
  completed: "bg-green-100 text-green-800",
};

function SampleCard({ sample }) {
  return (
    <>
    <Link to={`/samples/${sample.id}`} className="block">
      <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow"> 
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium">{sample.patientName}</p>
          <p className="text-sm text-muted-foreground">{sample.testType}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[sample.status]}`}
        >
          {sample.status}
        </span>
      </div>

      <div className="mt-3 space-y-1 text-sm text-muted-foreground">
        <p>Sample ID: {sample.id}</p>
        <p>Patient ID: {sample.patientId}</p>
        <p>Source: {sample.collectedFrom}</p>
      </div>
    </div>
        </Link>
    </>
  );
}

export default SampleCard