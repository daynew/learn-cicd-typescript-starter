import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../src/api/auth.ts";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("no authorzation should return null", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("should return ApiKey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey 1234abcd",
    };
    expect(getAPIKey(headers)).to.equal("1234abcd");
  });
});
