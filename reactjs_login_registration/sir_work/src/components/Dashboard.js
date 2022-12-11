import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  let auth = localStorage.getItem("email");

  useEffect(() => {
    if (auth == null) {
      navigate("/login");
    }
  });

  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome to Dashboard</h1>
        </div>
      </div>
      <div className="container bg-light">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          quam dicta quae reiciendis laudantium ratione molestiae labore
          perspiciatis, ea nostrum fugiat aliquam hic repellendus sapiente
          veniam nihil accusantium, commodi amet asperiores sed. Reiciendis
          tempore voluptate cupiditate blanditiis necessitatibus ipsa alias,
          unde optio cumque eligendi tenetur! Sed, accusamus tempora laboriosam
          asperiores, obcaecati ipsa quis possimus officia doloremque itaque
          cupiditate aliquid dignissimos aliquam cumque nulla quo. Aspernatur,
          sint. Asperiores consequatur deleniti et sunt vel debitis laboriosam
          esse placeat. Debitis excepturi perferendis illum iste, neque illo
          dolorum. Nemo blanditiis alias necessitatibus similique pariatur
          corporis cum fugiat, ipsum nam. Incidunt ipsum dicta sit aspernatur
          minima tempore magnam in tenetur, illum beatae voluptates sint dolorum
          soluta numquam eius provident iure ipsa eveniet vel ullam commodi
          corrupti quaerat vitae? Reprehenderit quibusdam dolores, numquam
          corrupti quas culpa nulla sint ex autem quam incidunt dicta odio
          doloremque ullam ducimus et laudantium? Laborum cupiditate nihil
          corporis et iure, consequuntur fuga dignissimos consequatur, ipsam
          voluptatem autem obcaecati, animi impedit nesciunt! Tempora facilis
          maxime adipisci! Modi, culpa asperiores blanditiis sint necessitatibus
          omnis, pariatur voluptatum dolorem earum facere, architecto
          perferendis! Perspiciatis consequatur, ea commodi rerum natus tempora
          nobis doloremque vitae libero dolor veritatis! Quos harum accusantium
          temporibus excepturi architecto, quo quasi reiciendis.
        </p>
      </div>
    </>
  );
}
