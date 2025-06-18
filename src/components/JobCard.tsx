type JobStatus = 'Applied' | 'Interviewing' | 'Rejected' | 'Offer';

interface JobCardProps {
  company: string;
  title: string;
  status: JobStatus;
  notes?: string;
}

const statusColors: Record<JobStatus, string> = {
  Applied: 'bg-blue-100 text-blue-700',
  Interviewing: 'bg-yellow-100 text-yellow-800',
  Rejected: 'bg-red-100 text-red-700',
  Offer: 'bg-green-100 text-green-700',
};

const JobCard = ({ company, title, status, notes }: JobCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      {notes && <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{notes}</p>}
    </div>
  );
};

export default JobCard;
