class Controller:
    def __init__(self, model, view):
        self.model = model
        self.view = view

    def action_index(self, data):
        self.view.render(data)

    def get_data(self):
        data = self.model.get_data()
        self.view.render(data)

    def add_data(self, data):
        self.model.add_data(data)
