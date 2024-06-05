/**
 * v0 by Vercel.
 * @see https://v0.dev/t/THiWIb70zxq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="relative w-full h-[500px] max-w-3xl">
      <img src="/placeholder.svg" width={800} height={500} alt="Map of Oregon" className="rounded-lg shadow-lg" />
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 p-4">
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-md p-2 shadow">
          <LocateIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="ml-1 font-medium">Portland</span>
        </div>
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-md p-2 shadow">
          <LocateIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="ml-1 font-medium">Eugene</span>
        </div>
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-md p-2 shadow">
          <LocateIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="ml-1 font-medium">Salem</span>
        </div>
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-md p-2 shadow">
          <LocateIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="ml-1 font-medium">Bend</span>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 rounded-md p-2 shadow">
        <div className="flex items-center gap-2">
          <RouteIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="font-medium">Roads</span>
        </div>
        <div className="flex items-center gap-2">
          <MountainIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="font-medium">Mountains</span>
        </div>
        <div className="flex items-center gap-2">
          <WavesIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="font-medium">Rivers</span>
        </div>
      </div>
    </div>
  )
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function RouteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  )
}


function WavesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  )
}
