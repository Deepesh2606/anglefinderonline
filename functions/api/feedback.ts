export const onRequestPost: PagesFunction = async (context) => {
  try {
    const data = await context.request.json() as {
      name?: string;
      email: string;
      category?: string;
      message: string;
    };

    // Validate inputs
    if (!data.email || !data.message) {
      return new Response(JSON.stringify({ error: "Email and message are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Log the suggestion to Cloudflare console logs
    console.log("Suggestion received:", data);

    // OPTION 1: Save to Cloudflare KV (requires KV namespace binding)
    // If you bind a KV namespace named 'SUGGESTIONS' to your Pages project:
    if (context.env.SUGGESTIONS) {
      const key = `feedback:${Date.now()}:${data.email}`;
      await context.env.SUGGESTIONS.put(key, JSON.stringify({
        ...data,
        timestamp: new Date().toISOString()
      }));
    }

    // OPTION 2: Forward to Discord/Slack via Webhook
    // If you configure a DISCORD_WEBHOOK env variable in your Cloudflare Pages dashboard:
    // if (context.env.DISCORD_WEBHOOK) {
    //   await fetch(context.env.DISCORD_WEBHOOK, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       embeds: [{
    //         title: `New Suggestion: ${data.category || 'General'}`,
    //         fields: [
    //           { name: "Name", value: data.name || "Anonymous", inline: true },
    //           { name: "Email", value: data.email, inline: true },
    //           { name: "Message", value: data.message }
    //         ],
    //         color: 65194
    //       }]
    //     })
    //   });
    // }

    return new Response(JSON.stringify({ success: true, message: "Thank you! Your feedback has been recorded." }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to process request: " + (err as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
