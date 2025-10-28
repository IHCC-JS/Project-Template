import "./style.css"

const app = document.getElementById("app")

app.innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <div class="max-w-md mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
      <p class="text-gray-600 mb-8">Fill out the form below and click submit.</p>
      
      <form id="demoForm" class="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        
        <button 
          type="submit" 
          id="submitBtn"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
      
      <div id="message" class="mt-4 p-4 rounded-md hidden"></div>
    </div>
  </div>
`

const form = document.getElementById("demoForm")
const messageDiv = document.getElementById("message")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value

  messageDiv.textContent = `Thank you, ${name}! We'll contact you at ${email}.`
  messageDiv.className = "mt-4 p-4 rounded-md bg-green-100 text-green-800"

  form.reset()
})

const submitBtn = document.getElementById("submitBtn")
let clickCount = 0

submitBtn.addEventListener("click", () => {
  clickCount++
  submitBtn.setAttribute("data-clicks", clickCount)
})
