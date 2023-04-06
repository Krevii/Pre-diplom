from model import Model
from view import View
from controller import Controller

model = Model()
view = View()
controller = Controller(model, view)
controller.action_index("Render view")
controller.get_data()
controller.add_data("somedata3")
controller.get_data()
#asdasdadasdsadad
