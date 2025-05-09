from enum import Enum


# Enum for report type
class ReportType(str, Enum):
    short = "short"
    extended = "extended"


# Enum for report format
class ReportFormat(str, Enum):
    json = "json"
    pdf = "pdf"
