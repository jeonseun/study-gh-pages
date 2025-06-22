import Link from 'next/link';

export default function Page() {
  const envVars = {
    repository: process.env.GITHUB_REPOSITORY,
    sha: process.env.GITHUB_SHA,
    workflow: process.env.GITHUB_WORKFLOW,
    runId: process.env.GITHUB_RUN_ID,
    ref: process.env.GITHUB_REF,
    action: process.env.GITHUB_ACTION,
  };

  return (
    <>
      <h1>hello page</h1>
      <Link href="/">link</Link>
      <span></span>
      {envVars.repository}
    </>
  );
}
