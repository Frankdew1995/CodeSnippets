import os
from win32com import client
from pathlib import Path



# Word to PDF Converter

def docx2pdf(doc_in, pdf_out):

    """
    :word to pdf
    :param doc_in word file path
    :param pdf_out pdf file save path
    """
    try:
        word = client.DispatchEx("Word.Application")
        if os.path.exists(pdf_out):
            os.remove(pdf_out)

        doc = word.Documents.Open(doc_in, ReadOnly=1)
        doc.SaveAs(pdf_out, FileFormat=17)
        doc.Close()
        return pdf_out

    except Exception as e:
        return str(e)


if __name__ == '__main__':

    docx2pdf(str(Path.cwd() / "Test.docx"), str(Path.cwd() / "Test.pdf"))