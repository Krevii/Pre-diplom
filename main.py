from model import Model
from view import View
from controller import Controller
#TODO:Добавить новые action в controller
#BUG:Исправить баг отсутствия данных в Data 
model = Model()
view = View()
controller = Controller(model, view)
controller.action_index("Render view")
controller.get_data()
controller.add_data("somedata3")
controller.get_data()
