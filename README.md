
---

```md
# ☁️ Serverless API with AWS Lambda, API Gateway, S3 — Terraform Project

This project demonstrates how to provision a fully serverless REST API on AWS using **Terraform**, including:
- A Lambda function that handles HTTP GET and POST requests
- API Gateway integration to expose the function publicly
- An S3 bucket to optionally store incoming POST data
- IAM roles and policies to manage access
- All infrastructure managed using Infrastructure-as-Code (IaC)

---

## 🔧 Technologies Used

- **Terraform**
- **AWS Lambda**
- **AWS API Gateway (REST)**
- **AWS IAM**
- **AWS S3**
- **Node.js (for Lambda function)**

---

## 📁 Project Structure

```

terraform-lambda-api/

├── lambda/
│   └── handler.js
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
├── .gitignore

````
## 🚀 How to Deploy

1. **Clone the project and navigate:**

```bash
git clone https://github.com/Stennis1/LamdaFunction.git
cd terraform-lambda-api/terraform
````

2. **Edit your region (optional):**

In `variables.tf`, set your region (e.g., `eu-north-1`):

```hcl
variable "region" {
  default = "eu-north-1"
}
```

3. **Initialize Terraform:**

```bash
terraform init
```

4. **Deploy infrastructure:**

```bash
terraform apply
```

Type `yes` when prompted.

---

## 🔍 How It Works

* The **Lambda function** handles both GET and POST requests
* The **API Gateway** exposes it publicly under the path `/prod/hello`
* If the request is POST and has a JSON body, the Lambda:

  * Parses the data
  * Saves it to an S3 bucket as a `.json` file

---

## 📬 Sample POST Request

You can test with `curl`:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Lambda Function","message":"Hello World!"}' \
  https://<your-api-id>.execute-api.eu-north-1.amazonaws.com/prod/hello
```

### ✅ Expected Response

```json
{
  "method": "POST",
  "received": {
    "name": "Lambda Function",
    "message": "Hello World!"
  }
}
```

The payload is also saved to your S3 bucket.

---

## 🧹 How to Clean Up (Prevent Charges)

To delete everything and avoid AWS billing:

```bash
cd terraform
terraform destroy
```

Type `yes` when prompted. This will remove:

* Lambda function
* API Gateway
* IAM roles
* S3 bucket and files

---

## 📌 Notes

* Your Cloud service provider API should be configured locally **[e.g: aws configure for AWS Cloud]**.
* This project is not on AWS Free Tier by default.
* Even minimal use may incur small charges (few cents).
* Consider setting up a billing alarm in your AWS account.

---
