from model import Model
from view import View
from controller import Controller

model = Model()
view = View()
controller = Controller(model, view)
controller.action_index("Render view")
controller.report_validation()
