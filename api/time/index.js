import { IncomingMessage, ServerResponse } from "http";

export default (req, res) => {
  res.end(new Date().toString());
};
