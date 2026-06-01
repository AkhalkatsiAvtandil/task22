const openDialog = document.querySelector("#open-dialog");
const popupElement = document.querySelector("dialog");
const closeDialog = document.querySelector("#close-dialog");

openDialog.addEventListener("click", () => {
  popupElement.showModal();
});

closeDialog.addEventListener("click", () => {
  popupElement.close();
});

const form = document.querySelector("#form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");
const userIdInput = document.querySelector("#userId");
const postIdInput = document.querySelector("#postId");

// const result = new Promise((resolve, reject) => {
// 	if (false) {
// 		resolve("success");
// 	} else {
// 		reject("403 error");
// 	}
// });

// result
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// console.log(4535);

async function getSinglePost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    if (!data) {
      throw new Error("მონაცემები ვერ მოიძებნა");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(id) {
  (fetch("https://jsonplaceholder.typicode.com/posts/${id}"),
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(id),
    });

  // TODO: წაშლის ფუნქცია, რომელიც მიიღებს id-ს და გააგზავნის წაშლის მოთხოვნას სერვერზე, method: "DELETE"
  //  method: "DELETE", https://jsonplaceholder.typicode.com/posts/${id}
  // TODO: წაშლის შემდეგ, წაშლილი პოსტი უნდა გაქრეს UI-დან, ანუ ქარდების სიიდან, თქვენ შეგიძლიათ ამოიღოთ ეს ქარდი დომიდან ან ახლიდან წამოიღოთ დატა getAllPosts() ფუნქციის მეშვეობით და განაახლოთ UI(რეალურად ამ სერვერზე არ ხდება მონაცემების ცვლილება, მაგრამ თქვენ შეგიძლიათ ისე მოიქცეთ თითქოს ხდება და UI-ს განაახლოთ)
}

function card() {
  (fetch("https://jsonplaceholder.typicode.com/posts/${id}"),
  {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(get),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// function getAllPosts(card : any) {
// (fetch ('https://jsonplaceholder.typicode.com/posts/1'))

// }

function postActions() {
  // TODO:
  // 1. ქარდის ღილაკებზე უნდა მიამაგროთ event listener-ები
  // 2. იქნება 2 ღილაკი რედაქტირება და წაშლა
  // 3. id შეგიძლიათ შეინახოთ data-post-id ატრიბუტად ღილაკებზე, data ატრიბუტებზე წვდომა შეგიძლიათ dataset-ის გამოყენებით მაგ:selectedElement.dataset.postId
  // 4. წაშლა ღილაკზე დაჭერისას უნდა გაიგზავნოს წაშლის მოთხოვნა (deletePost ფუნქციის მეშვეობით) სერვერზე და გადაეცეს id
  // 5. ედიტის ღილაკზე უნდა გაიხსნას მოდალი სადაც ფორმი იქნება იმ მონაცემებით შევსებული რომელზეც მოხდა კლიკი. ედიტის ღილაკზე უნდა გამოიძახოთ getSinglePost ფუნქცია და რომ დააბრუნებს ერთი მომხმარებლის დატას (ობიექტს და არა მასივს) const data = await getSinglePost(btn.dataset.postId); ამ ინფორმაციით  უნდა შეივსოს ფორმი და ამის შემდეგ შეგიძლიათ დააედიტოთ ეს ინფორმაცია და ფორმის დასაბმითებისას უნდა მოხდეს updatePost() ფუნქციის გამოძახება, სადაც გადასცემთ განახლებულ პოსტის ობიექტს, გვჭირდება პოსტის აიდიც, რომელიც  მოდალის გახსნისას postId-ის (hidden input არის და ვიზუალურად არ ჩანს) value-ში შეგიძლიათ შეინახოთ.
}

function getAllPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // TODO: შევქმნათ UI სადაც ყველა პოსტი იქნება ნაჩვენები ქარდების სახით, თითო პოსტის ქარდზე უნდა იყოს პოსტის სათაური, ტექსტი,  წაშლის და  ედიტის ღილაკი, ჰტმლ-ში ჩამატებსი შემდეგ დაგჭირდებათ postActions ფუნქციის გამოძახება, რომ ქარდების ღილაკებს მიამაგროთ ივენთ ლისნერები
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

getAllPosts();

async function createNewPost(post) {
  // fetch("https://jsonplaceholder.typicode.com/posts", {
  // 	method: "POST",
  // 	headers: {
  // 		"Content-type": "application/json; charset=UTF-8",
  // 	},
  // 	body: JSON.stringify(post),
  // })
  // 	.then((response) => response.json())
  // 	.then((data) => {
  // 		console.log(data);
  // 	})
  // 	.catch((error) => {
  // 		console.log(error);
  // 	});

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(post),
    });

    const data = await response.json();

    console.log(data);
    // TODO: პოსტის დამატების შემდეგ, ახალი პოსტი უნდა დაემატოს UI-ს, ანუ ქარდების სიას
  } catch (error) {
    console.log(error);
  }
}

async function updatePost(postObj) {
  // მიიღებს დაედითებულ ინფორმაციას და გააგზავნით სერვერზე, ისე როგორც რეგისტრაციისას
  // TODO დაასრულეთ ფუნქცია
  //  method: "put",  https://jsonplaceholder.typicode.com/posts/${postObj.id}
  // TODO: ედიტირების შემდეგ ახლიდან წამოიღეთ დატა getAllPosts() ფუნქციის მეშვეობით და განაახლეთ UI (რეალურად ამ სერვერზე არ ხდება მონაცემების ცვლილება, მაგრამ თქვენ შეგიძლიათ ისე მოიქცეთ თითქოს ხდება და UI-ს განაახლოთ)
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newPost = {
    title: titleInput.value,
    body: bodyInput.value,
    userId: Number(userIdInput.value),
  };

  // console.log(newPost);

  // const formDataInfo = new FormData(form);
  // console.log(Object.fromEntries(formDataInfo));
  // const postData = Object.fromEntries(formDataInfo);

  // for (const [key, value] of formDataInfo.entries()) {
  // 	console.log(`${key}: ${value}`);
  // }

  // TODO:  დაგვჭირდება postIdInput.value, რომ გავიგოთ ვაკეთებთ ედიტირებას თუ ახალ პოსტის შექმნას, რადგან ორივე შემთხვევაში ერთ ფორმს ვიყენებთ, ამიტომ უნდა შევამოწმოთ postIdInput.value-ს მნიშვნელობა და თუ ის ცარიელია მაშინ ვქმნით ახალ პოსტს, თუ არა მაშინ ვაედითებთ უკვე არსებულ პოსტს. თავიდან ცარიელია, თუ დაედითებას ვაკეთებთ, ჩვენ ვანიჭებთ მნიშვნელობას postActions ფუნქციაში

  //  TODO: თუ postIdInput.value არის ცარიელი მაშინ უნდა შევქმნათ  -->  createNewPost(newPost);

  // TODO: თუ postIdInput.value არაა ცარიელი სტრინგი მაშინ უნდა დავაედიტოთ -->  updatePost(newPost);
});

// console.log(Object.entries(postObject));
