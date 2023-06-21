import { Template } from "aws-cdk-lib/assertions";
import * as sst from "@serverless-stack/resources";
import DynamoDBStack from "../lib/DynamoDBStack";

test("Test Stack", () => {
  const app = new sst.App();
  // WHEN
  const stack = new DynamoDBStack(app, "test-stack");
  // THEN
  const template = Template.fromStack(stack);
  template.hasResource("AWS::DynamoDB::Table", {
    Properties: {
      BillingMode: "PAY_PER_REQUEST",
    },
  });
});
