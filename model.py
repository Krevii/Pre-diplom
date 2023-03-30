import docx
from docx import Document
from docx.shared import Pt
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT

document = Document("doc.docx")

font_name = "Times New Roman"
font_size = Pt(14)

document.add_paragraph("Всем привет сегодня я прохожу преддипломную практику тема практики: ВЫЖИТЬ")

for i, paragraph in enumerate(document.paragraphs):
    for run in paragraph.runs:
        run.font.size = font_size
        run.font.name = font_name
    print(i)
    paragraph_format = paragraph.paragraph_format

    paragraph_format.left_indent = 0
    paragraph_format.right_indent = 0
    paragraph_format.space_after = 0
    paragraph_format.space_before = 0
    paragraph_format.line_spacing = 1
    paragraph.alignment = WD_PARAGRAPH_ALIGNMENT.JUSTIFY
    paragraph_format.first_line_indent = Pt(35.5)

    paragraph.text.title()

document.save("doc.docx")


class Model:
    def __init__(self):
        self.data = ["somedata1", "somedata2"]

    def get_data(self):
        return self.data

    def add_data(self, data):
        self.data.append(data)

    def report_validation(self, data):
        document = data
