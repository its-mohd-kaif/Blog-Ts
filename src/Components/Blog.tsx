import React, { useState } from "react";
import "./Blog.css";
// Type Defined
type obj = {
  text: string;
  image?: string;
  id: any;
  like: number;
  time: Date;
};
function Blog() {
  // UseState For Text Field
  const [text, setText] = useState("");
  //   UseState For File Image Field
  const [image, setImage] = useState("");
  const [data, setData] = useState<obj[] | []>([]);
  //   UseState for disabled button when user press edit button so other edit button will be disabled
  const [disabled, setDisabled] = useState(false);
  // Function that put text input values into state
  const textHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };
  //   Function that put image into state
  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  //   Post Button
  const postHandler = () => {
    // Check Validation
    if (text === "") {
      alert("Empty Text Field Can Not Be Added!!");
      document.getElementById("text")?.focus();
    } else {
      // Push Text and Image into Object
      let obj: obj = {
        text: text,
        image: image,
        id: Math.floor(Math.random() * 10000),
        like: 0,
        time: new Date(),
      };
      setData([...data, obj]);
      setText("");
      setImage("");
      setDisabled(false);
    }
  };
  //   Delete Blog Function
  const deleteBlogHandler = (val: obj[]) => {
    for (let i = 0; i < data.length; i++) {
      if (val === data[i].id) {
        // Check Confirmation about delete
        let flag = window.confirm("Are you Sure?");
        if (flag === true) {
          data.splice(i, 1);
          break;
        }
      }
    }
    setData([...data]);
  };
  //   Edit Blog Function
  const editBlogHandler = (val: obj[]) => {
    for (let i = 0; i < data.length; i++) {
      if (val === data[i].id) {
        setText(data[i].text);
        data.splice(i, 1);
      }
    }
    setData([...data]);

    setDisabled(true);
  };

  const likeHandler = (val: obj[]) => {
    for (let i = 0; i < data.length; i++) {
      if (val === data[i].id) {
        // Check Confirmation about delete
        data[i].like++;
      }
    }
    setData([...data]);
  };
  return (
    <div className="mainBlogDiv">
      <div className="title">
        <span className="titleText">Readit Blog</span>
      </div>

      <div className="headerBlog">
        <h3>write your thoughts here...</h3>
      </div>
      <div className="textArea">
        <textarea
          onChange={textHandler}
          placeholder="Write something"
          value={text}
          id="text"
          autoFocus
        />
        <label className="filebuttton">
          <span>
            <i className="fa fa-file" style={{ fontSize: "30px" }}></i>
          </span>
          <span>
            <input
              // value={image as string}
              className="fileInput"
              onChange={onImageChange}
              type="file"
              id="file"
            />
          </span>
        </label>
      </div>
      <div className="postBtn">
        <button className="post" onClick={postHandler}>
          Post
        </button>
      </div>
      <div className="displayBlog">
        <ul>
          {data.map((item: obj, index) => (
            <ul key={index}>
              <div className="row">
                <div className="column1">
                  <li>
                    <h3>{item.text}</h3>
                  </li>
                </div>
                <div className="column2">
                  <center>
                    <li>
                      {<img className="imgBlog" src={item.image} alt="" />}
                    </li>
                  </center>

                  <div className="btnDiv">
                    <div className="actionList">
                      <div>
                        <button
                          onClick={() => {
                            editBlogHandler(item.id);
                          }}
                          className="editBtn"
                          disabled={disabled}
                        >
                          ✏️
                        </button>{" "}
                        <button
                          onClick={() => {
                            deleteBlogHandler(item.id);
                          }}
                          className="deleteBtn"
                        >
                          ❌
                        </button>
                        <button
                          onClick={() => likeHandler(item.id)}
                          className="deleteBtn"
                        >
                          <i
                            className="fas fa-heart"
                            style={{ fontSize: "20px", color: "red" }}
                          ></i>
                        </button>
                        <span className="likeText">
                          {item.like === 0 ? (
                            <span></span>
                          ) : (
                            <span>{item.like}</span>
                          )}
                        </span>
                      </div>
                      <div className="dateDiv">
                        <span>Date : {item.time.toLocaleDateString()}, </span>
                        <span>
                          Time:
                          {item.time.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Blog;
