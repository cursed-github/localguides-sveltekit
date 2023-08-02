const load = async ({ locals: { getSession } }) => {
  console.log("jello from layout.server.");
  return {
    session: await getSession()
  };
};
export {
  load
};
