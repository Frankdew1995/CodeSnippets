from docxtpl import DocxTemplate

doc = DocxTemplate('info.docx')

p = doc.tables[0].rows[0].cells[0].add_paragraph()

r = p.add_run()

r.add_picture("Unbenannt.png")


details = {
    "Coffee": 12,
    "Noodle": 23,
    "Soup": 123
}


context = {"details": details
           }
doc.render(context)

doc.save("Test.docx")




