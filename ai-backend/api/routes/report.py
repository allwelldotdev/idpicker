from typing import Annotated

from fastapi import APIRouter

from api.models.report import ReportFormat, ReportType

router = APIRouter(prefix="/report", tags=["report"])


# Get Student Report
@router.get("/{student_id}")
async def get_student_report(
    type: Annotated[ReportType, "short or extended"],
    format: Annotated[ReportFormat, "json or pdf"],
):
    """Retrieve a generated report (short or extended) for a student.

    Response: PDF file stream or JSON with report details.

    Use case: Deliver personalized reports, gated by subscription status.
    """
    pass


# Generate Student Report
@router.post("/generate")
async def generate_report():
    """Generate a new report based on updated student data.

    Response: JSON with report generation and offer for extended report (paid status offer).

    Use case: Dynamically assemble prompts and generate report and
    if (subscription status: paid) downloadable pdfs.
    """
    pass
