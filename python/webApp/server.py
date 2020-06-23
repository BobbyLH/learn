import web
from web import form
from simpleeval import simple_eval

render = web.template.render('templates/')

urls = (
  # '/', 'index',
  '/(.*)', 'index'
)

calculate_form = form.Form(
  form.Textbox('expr', description='Expr: '),
  form.Button('Calculate', type='submit', description='Calculate!')
)

class index:
  def GET(self, name):
    data = web.input(name=None)
    f = calculate_form()
    return render.index('Good Morning ' + data.name, f, 0)
    # return render.index('Good Morning ' + name, f, 0)

  def POST(self, name):
    f = calculate_form()
    data = web.input(name=None, expr='')
    expr = data.expr
    try:
      result = expr + ' = ' + str(simple_eval(expr))
    except:
      result = 'Error input!'

    return render.index(data.name, f, result)

app = web.application(urls, globals())
wsgiapp = app.wsgifunc()

if __name__ == '__main__':
  app.run()