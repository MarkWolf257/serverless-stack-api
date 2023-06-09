import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as sst from "@serverless-stack/resources";

export default class S3Stack extends sst.Stack {
    bucket;

    constructor(scope, id, props) {
        super(scope, id, props);

        this.bucket = new s3.Bucket(this, "Uploads", {
            cors: [
                {
                    maxAge: 3000,
                    allowedOrigins: ["*"],
                    allowedHeaders: ["*"],
                    allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
                },
            ],
        });

        new cdk.CfnOutput(this, "AttachmentsBucketName", {
            value: this.bucket.bucketName,
        });
    }
}